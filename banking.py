def show_balance():
    print("Your balance is", balance)

def deposit():
    global balance
    amount = float(input("Enter amount to deposit: "))
    balance += amount
    print("Deposited:", amount)

def withdraw():
    global balance
    amount = float(input("Enter amount to withdraw: "))
    if amount <= balance:
        balance -= amount
        print("Withdrawn:", amount)
    else:
        print("Insufficient balance:", amount)

balance = 0
running = True

while running:
    print("1. Show Balance")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Exit")

    choice = input("Enter your choice (1-4): ")

    if choice == '1':
        show_balance()
    elif choice == '2':
        deposit()
    elif choice == '3':
        withdraw()
    elif choice == '4':
        running = False
        print("Thank you")
    else:
        print("Enter a valid choice")
