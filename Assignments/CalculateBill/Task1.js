//Task 1: Create a function that returns JSON structure in the following format
function formatBill(bill, items) {
    return {
        id: bill.id,
        billNumber: bill.billNumber,
        opentime: bill.opentime,
        customerName: bill.customerName,
        billItems: bill.billItems.map(billItem => {
            const item = items.find(i => i.id === billItem.id);
            return {
                id: billItem.id,
                name: item ? item.itemName : "Unknown Item",
                quantity: billItem.quantity
            };
        })
    };
}
