import { CartContext } from "@/components/AppContext";
import MenuItemTile from "@/components/menu/MenuItemTile";
import { useContext, useState, useCallback } from "react";
import toast from "react-hot-toast";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, cupSizes = [], addOnOptions = [] } = menuItem;
  const [selectedCupSize, setSelectedCupSize] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCartButtonClick = useCallback(() => {
    const hasOptions = cupSizes.length > 0 || addOnOptions.length > 0;

    if (hasOptions) {
      setShowPopup(true);  // 如果有选项，显示弹出窗口
      return;
    }

    confirmAddToCart();
  }, [cupSizes, addOnOptions]);

  const confirmAddToCart = useCallback(async () => {
    if (cupSizes.length > 0 && !selectedCupSize) {
      toast.error('Please select a size');
      return;
    }

    addToCart(menuItem, selectedCupSize, selectedAddOns);

    await new Promise(resolve => setTimeout(resolve, 500));
    toast.success(`${name} added to cart!`);
    setShowPopup(false);
  }, [menuItem, selectedCupSize, selectedAddOns, addToCart, name]);

  return (
    <div className="menu-item">
      <MenuItemTile
        image={image}
        name={name}
        description={description}
        basePrice={basePrice}
        cupSizes={cupSizes}
        addOnOptions={addOnOptions}
        onAddToCart={handleAddToCartButtonClick}
      />

      {showPopup && (
        <div className="popup">
          <h4>Select Size</h4>
          {cupSizes.map(size => (
            <button
              key={size._id}
              className={selectedCupSize === size ? 'selected' : ''}
              onClick={() => setSelectedCupSize(size)}>
              {size.name}
            </button>
          ))}

          <h4>Select Add-ons</h4>
          {addOnOptions.map(addOn => (
            <button
              key={addOn._id}
              className={selectedAddOns.includes(addOn) ? 'selected' : ''}
              onClick={() => {
                if (selectedAddOns.includes(addOn)) {
                  setSelectedAddOns(selectedAddOns.filter(item => item !== addOn));
                } else {
                  setSelectedAddOns([...selectedAddOns, addOn]);
                }
              }}>
              {addOn.name}
            </button>
          ))}

          <button onClick={confirmAddToCart}>
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}
