// Function to handle product purchase
function addToCart(product) {
    let quantity = document.querySelector(`#quantity`).value;
    let price = product === 'pb' ? document.querySelector('#price-pb').innerText : document.querySelector('#price-ff').innerText;

    // Send purchase data (for example via Telegram API)
    alert(`تم إضافة ${quantity} من المنتج إلى سلة الشراء. إجمالي السعر: ${quantity * price} ليرة سورية`);

    // Send notification to Telegram (Using Bot API) (This needs to be implemented)
    sendTelegramNotification(product, quantity, price);
}

// Function to update product information
function updateProductInfo() {
    let product = document.querySelector('#product').value;
    let quantity = document.querySelector('#quantity-admin').value;

    // Update product information here (perhaps in a database or via API)
    alert(`تم تحديث المنتج: ${product} بكمية: ${quantity}`);
}

// Function to send Telegram notification
function sendTelegramNotification(product, quantity, price) {
    let botToken = 'YOUR_BOT_TOKEN'; // Your Telegram Bot Token
    let chatId = 'YOUR_CHAT_ID'; // Your Telegram Chat ID
    let message = `منتج: ${product}\nكمية: ${quantity}\nسعر الوحدة: ${price}\nالإجمالي: ${quantity * price}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
        .then(response => response.json())
        .then(data => console.log('Telegram notification sent', data))
        .catch(error => console.error('Error sending notification:', error));
}
