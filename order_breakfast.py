import time

def intro():
	print_pause("Hello, I'm Bob, the Breakfast Bot.")
	print_pause("Today we have two breakfasts available.")
	print_pause("The first is waffles with strawberries and whipped cream.")
	print_pause("The second is sweet potato pancakes with butter and syrup.")

def get_order():
	user_choice = valid_input("Please place your order. "
		                      "Would you like waffles or pancakes? \n", 
		                      "waffles", "pancakes")
	if 'waffles' in user_choice:
		print_pause("Waffles it is!")
	elif 'pancakes' in user_choice:
		print_pause("Pancakes it is!")
	print_pause("Your order will be ready shortly.")
	order_again()

def order_breakfast():	
	intro()
	get_order()
	order_again()

def order_again():
	user_choice = valid_input("Would you like to place another order? "
		                      "Please say 'yes' or 'no'. \n",
		                      "yes", "no")
	if 'no' in user_choice:
		print_pause("OK then, goodbye!")
	elif 'yes' in user_choice:
		print_pause("Very good, I'm happy to take another order.")
		get_order()

def print_pause(message_to_print):
	print(message_to_print)
	time.sleep(1)


def valid_input(prompt, option1, option2):
	while True:
		user_choice = input(prompt).lower()
		if option1 in user_choice:
			break
		elif option2 in user_choice:
			break
		else: 
			print_pause("Sorry I don't understand.")
	return user_choice

order_breakfast()