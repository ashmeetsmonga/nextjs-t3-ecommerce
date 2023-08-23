import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState(1);

  const { mutate: addProductMutation, isSuccess } =
    api.product.addProduct.useMutation();

  const resetFields = () => {
    setTitle("");
    setDesc("");
    setPrice(0);
    setImg(1);
  };

  const handleSubmit = () => {
    if (!title || !desc || !price || !img)
      return toast.error("Please fill all details");
    const toastID = toast.loading("Adding Product");
    addProductMutation(
      { title, desc, price, img },
      {
        onSuccess: (data) =>
          toast.success("Product added successfully", { id: toastID }),
        onError: (error) =>
          toast.error("Failed to add product", { id: toastID }),
        onSettled: () => resetFields(),
      }
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="my-10 text-4xl">Add a new Product</h1>
      <input
        type="text"
        className="w-1/4 rounded bg-gray-100 p-4 outline-none focus:outline-none"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="w-1/4 rounded bg-gray-100 p-4 outline-none focus:outline-none"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        className="w-1/4 rounded bg-gray-100 p-4 outline-none focus:outline-none"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <input
        type="number"
        className="w-1/4 rounded bg-gray-100 p-4 outline-none focus:outline-none"
        placeholder="Image Number"
        value={img}
        onChange={(e) => setImg(parseInt(e.target.value))}
      />
      <button
        onClick={handleSubmit}
        className="rounded bg-black p-4 font-semibold text-white"
      >
        Add Product
      </button>
    </div>
  );
};

export default CreatePage;
