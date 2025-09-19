def user():
    name = input("enter user name:")
    if name in user:
        print("user is exist",user)
    else:
        balance = flaot(input("enter balance"))
        user[name] = balance
        print("User" , name, "created with balance" , balance)


def show_balance():
    print("your balance is", balance)

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
current_user = None

while running:
    if current_user is None :
        print("1. create_user")
        print("2.login")
        print("3.exit")

        









    print("\n1. Show Balance")
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

#  by using dictonary store user account