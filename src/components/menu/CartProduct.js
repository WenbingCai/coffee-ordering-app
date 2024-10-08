import { cartProductPrice } from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import Image from "next/image";

const AddOnList = ({ addOns }) => (
  <div className="text-sm text-gray-500">
    {addOns.map(addOn => (
      <div key={addOn.name}>
        {addOn.name} ${addOn.price}
      </div>
    ))}
  </div>
);

export default function CartProduct({ product, onRemove }) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-24">
        <Image width={240} height={240} src={product.image} alt={'coffee image'} />
      </div>
      <div className="grow">
        <h3 className="font-semibold">
          {product.name}
        </h3>
        {product.cupSize && (
          <div className="text-sm">
            Cup Size: <span>{product.cupSize.name}</span>
          </div>
        )}
        {product.addOns?.length > 0 && <AddOnList addOns={product.addOns} />}
      </div>
      <div className="text-lg font-semibold">
        ${cartProductPrice(product)}
      </div>
      {!!onRemove && (
        <button onClick={() => onRemove(product)}>
          <Trash className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
