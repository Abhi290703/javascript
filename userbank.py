users = {}  # dictionary to store users and balances

def new_user():
    name = input("Enter username: ")
    if name in users:
        print("User already exists!")
    else:
        balance = float(input("Enter initial balance: "))
        users[name] = balance
        print("User", name, "created with balance", balance)

def show_balance(user):
    print("{user}'s balance is", users[user])

def deposit(user):
    amount = float(input("Enter amount to deposit: "))
    users[user] += amount
    print("Deposited:", amount)

def withdraw(user):
    amount = float(input("Enter amount to withdraw: "))
    if amount <= users[user]:
        users[user] -= amount
        print("Withdrawn:", amount)
    else:
        print("Insufficient balance:", amount)

current_user = None
running = True

while running:
    if current_user is None:
        print("1. Create User")
        print("2. Login")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            new_user()
        elif choice == '2':
            name = input("Enter username: ")
            if name in users:
                current_user = name
                print(f"Welcome, {current_user}!")
            else:
                print("User not found. Please create one first.")
        elif choice == '3':
            running = False
            print("Thank you")
        else:
            print("Invalid choice")
    else:
        print(f"\n--- Banking Menu ({current_user}) ---")
        print("1. Show Balance")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Logout")

        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            show_balance(current_user)
        elif choice == '2':
            deposit(current_user)
        elif choice == '3':
            withdraw(current_user)
        elif choice == '4':
            print(f"Logging out {current_user}...")
            current_user = None
        else:
            print("Enter a valid choice")
