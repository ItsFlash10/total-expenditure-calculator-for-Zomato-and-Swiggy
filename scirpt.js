/**
The below code will help you find the total expenditure on Zomato and Swiggy so far.

For Zomato: 
   Step 1: Go to zomato.com, 
   Step 2: Go to "Profile", click on "Zomato Credits", you'll be directed to a new page, click on "Order History" under "Online Ordering" . 
           [Its important that you foloow the above step to go to "order History" and not directly by clicking on "Order History" in the "Profile" page itself.]
   Step 3: Scroll to the very bottom and click on "Load More", until the option disappears.
   Step 4: Right click anywhere on the screen and click on "Inspect" or press "Ctrl+Shift+I", in the inspector, go to the console copy and paste the below code 
   and press Enter.
   
   # Make sure that you follow all the steps carefully.
*/


amount_node_list = document.querySelectorAll('.cost b');
amount_regex = /\d+.\d*/g;
total_amount = 0
for (let i = 0; i < amount_node_list.length; i++) {
  current_amount = amount_node_list[i].innerHTML;
  if (current_amount.match(amount_regex)) {
    integer_amount = parseInt(current_amount.match(amount_regex)[0])
    total_amount += parseInt(integer_amount);
  }
}
console.log("Total expenditure on Zomato so far is INR ", total_amount);

/*
For Swiggy: 
   Step 1: Go to Swiggy.com, 
   Step 2: Click on your "Account" then click on "Orders".
   Step 3: Scroll to the very bottom and click on "Show More Orders", until nothing new gets added. 
   Step 4: Right click anywhere on the screen and click on "Inspect" or press "Ctrl+Shit+I", in the inspector, go to console copy and paste the below code and press Enter.
   
   # Make sure that you follow all the steps carefully.
*/

amount_node_list = document.getElementsByClassName('_3Hghg');
amount_regex = /\d+.\d*/g;
total_amount = 0
for (let i = 0; i < amount_node_list.length; i++) {
  current_amount = amount_node_list[i].innerHTML;
  if (current_amount.match(amount_regex)) {
    integer_amount = parseInt(current_amount.match(amount_regex)[0])
    total_amount += integer_amount;
  }
}
console.log("Total expenditure on Swiggy so far is INR ", total_amount);
