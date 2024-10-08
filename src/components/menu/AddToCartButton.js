import FlyingButton from 'react-flying-item';

export default function AddToCartButton({ hasSizesOrExtras, onClick, basePrice, image }) {
  return (
    <div className="flying-button-parent mt-4">
      <FlyingButton targetTop={'5%'} targetLeft={'95%'} src={image}>
        <div onClick={onClick} className="cursor-pointer bg-primary text-white rounded-full px-8 py-2">
          Add to cart ${basePrice}
        </div>
      </FlyingButton>
    </div>
  );
}
