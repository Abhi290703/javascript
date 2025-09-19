users = {}   # empty dictionary

def create_user():
    name = input("Enter new username: ")
    if name in users:
        print("User already exists!")
    else:
        balance = float(input("Enter initial balance: "))
        users[name] = balance
        print(f"User {name} created with balance {balance}")

def show_balance(name):
    print(f"{name}'s balance is:", users[name])

def deposit(name):
    amount = float(input("Enter amount to deposit: "))
    users[name] += amount
    print("Deposited:", amount)

def withdraw(name):
    amount = float(input("Enter amount to withdraw: "))
    if amount <= users[name]:
        users[name] -= amount
        print("Withdrawn:", amount)
    else:
        print("Insufficient funds!")

running = True
current_user = None

while running:
    if current_user is None:
        print("\n1. Create User")
        print("2. Login")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            create_user()
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

        choice = input("Enter your choice: ")

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
            print("Invalid choice")
