//Task 2: Create a function that returns JSON structure in the following format and calculate the total amount (include taxes & discount) to be paid.
function calculateTotalBill(bill, items, categories) {
    let totalAmount = 0;

    const updatedBillItems = bill.billItems.map(billItem => {
        const item = items.find(i => i.id === billItem.id);
        const category = categories.find(c => c.id === item.category.categoryId);
        const discountRate = billItem.discount.isInPercent === 'Y' ? billItem.discount.rate / 100 : billItem.discount.rate;
        const baseAmount = item.rate * billItem.quantity;
        
        // Calculate the discount on the base amount
        const discountedAmount = baseAmount * (1 - discountRate);

        // Calculate taxes
        const taxAmount = item.taxes.reduce((acc, tax) => {
            const taxRate = tax.isInPercent === 'Y' ? tax.rate / 100 : tax.rate;
            return acc + (discountedAmount * taxRate);
        }, 0);

        const totalItemAmount = discountedAmount + taxAmount;

        // Update total amount
        totalAmount += totalItemAmount;

        return {
            id: billItem.id,
            name: item.itemName,
            quantity: billItem.quantity,
            discount: billItem.discount,
            taxes: item.taxes,
            amount: totalItemAmount.toFixed(2),
            superCategoryName: category.superCategory.superCategoryName,
            categoryName: category.categoryName
        };
    });

    return {
        id: bill.id,
        billNumber: bill.billNumber,
        opentime: bill.opentime,
        customerName: bill.customerName,
        billItems: updatedBillItems,
        "Total Amount": totalAmount.toFixed(2)
    };
}
