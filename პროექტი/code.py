logged_in = False
account_exists = False
balance = 100
fullname = ""
password = ""
original_card = "G9 ბარათი"
owned_cards = []

while True:
    print("")
    print("|აირჩიეთ|")
    print("1) შესვლა")
    print("2) ანგარიშის შექმნა")
    print("3) გასვლა")
    print("")
    menu = input("შეიყვანეთ არჩევანი: ")

    if menu == "2":
        if account_exists:
            print("ანგარიში უკვე არსებობს")
            continue
        fullname = input("შეიყვანეთ სახელი და გვარი: ")
        pass1 = input("შეიყვანეთ პაროლი (მინიმუმ 8 სიმბოლო): ")
        pass2 = input("გაიმეორეთ პაროლი: ")
        if len(pass1) < 8:
            print("პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო")
        elif pass1 != pass2:
            print("პაროლები არ ემთხვევა")
        else:
            password = pass1
            account_exists = True
            logged_in = True
            print("ანგარიში წარმატებით შეიქმნა და შესული ხართ")

    elif menu == "1":
        if not account_exists:
            print("ანგარიში არ არსებობს")
            continue
        fullname_input = input("შეიყვანეთ სახელი და გვარი: ")
        pass_input = input("შეიყვანეთ პაროლი: ")
        if fullname_input == fullname and pass_input == password:
            logged_in = True
            print("შეხვედით წარმატებით")
        else:
            print("მონაცემები არასწორია")

    elif menu == "3":
        print("ნახვამდის")
        break

    else:
        print("არასწორი არჩევანი")

    while logged_in:
        print("")
        print("|მთავარი მენიუ|")
        print("ბალანსი: " + str(balance) + "₾")
        print("1) მობილური ჩარიცხვა")
        print("2) ფულის მოთხოვნა")
        print("3) ბარათები")
        print("4) გადარიცხვა")
        print("5) გამოსვლა")
        print("")
        choice = input("აირჩიეთ ოპერაცია: ")

        if choice == "1":
            print("|მობილური ჩარიცხვა|")
            amount_str = input("ჩარიცხვის თანხა: ")
            if not amount_str.isdigit():
                print("არასწორი თანხა")
                continue
            amount = int(amount_str)
            if amount <= 0 or amount > balance:
                print("არასაკმარისი თანხა")
                continue
            balance -= amount
            print("ჩარიცხვა შესრულდა ბარათით: " + original_card)

        elif choice == "2":
            print("|ფულის მოთხოვნა|")
            amount_str = input("შეიყვანეთ მოთხოვნილი თანხა: ")
            if not amount_str.isdigit():
                print("არასწორი თანხა")
                continue
            amount = int(amount_str)
            if amount <= 0:
                print("არასწორი თანხა")
                continue

            cards_list = [original_card] + owned_cards + ["უკან დაბრუნება"]
            while True:
                print("აირჩიეთ ბარათი მოთხოვნისთვის ან უკან დაბრუნება:")
                for i in range(len(cards_list)):
                    print(str(i + 1) + ") " + cards_list[i])
                card_choice = input("აირჩიეთ: ")
                if not card_choice.isdigit():
                    print("არასწორი არჩევანი")
                    continue
                card_index = int(card_choice) - 1
                if card_index < 0 or card_index >= len(cards_list):
                    print("არასწორი არჩევანი")
                    continue
                if cards_list[card_index] == "უკან დაბრუნება":
                    break
                chosen_card = cards_list[card_index]
                if chosen_card == original_card or chosen_card in owned_cards:
                    balance += amount
                    print("მოთხოვნა შესრულდა ბარათით: " + chosen_card)
                    break
                else:
                    print("თქვენ არ ფლობთ ამ ბარათს")

        elif choice == "3":
            print("|ბარათები|")
            cards_for_sale = [
                "PLUS ბარათი",
                "Visa/Mastercard",
                "სტუდენტური ბარათი",
                "სკოლის ბარათი"
            ]
            card_price = 10
            for i in range(len(cards_for_sale)):
                card_name = cards_for_sale[i]
                if card_name in owned_cards:
                    print(str(i + 1) + ") " + card_name + " - შეძენილია")
                else:
                    print(str(i + 1) + ") " + card_name + " (10₾)")
            print(str(len(cards_for_sale) + 1) + ") უკან დაბრუნება")
            card_choice = input("აირჩიეთ ბარათი: ")
            if card_choice == str(len(cards_for_sale) + 1):
                print("დაბრუნდით მთავარ მენიუში")
            elif card_choice.isdigit():
                index = int(card_choice) - 1
                if 0 <= index < len(cards_for_sale):
                    selected_card = cards_for_sale[index]
                    if selected_card in owned_cards:
                        print("ბარათი უკვე შეძენილია")
                    else:
                        if balance >= card_price:
                            balance -= card_price
                            owned_cards.append(selected_card)
                            print("ბარათი წარმატებით შეკვეთილია: " + selected_card)
                        else:
                            print("არასაკმარისი თანხა ბარათისთვის")
                else:
                    print("არასწორი არჩევანი")
            else:
                print("არასწორი არჩევანი")

        elif choice == "4":
            print("|გადარიცხვა|")
            print("1) ტელეფონის ნომრით")
            print("2) პირადი ნომრით")
            print("3) ანგარიშის ნომრით")
            print("4) უკან დაბრუნება")
            transfer_choice = input("აირჩიეთ: ")
            if transfer_choice == "4":
                print("დაბრუნდით მთავარ მენიუში")
                continue
            if transfer_choice in ["1", "2", "3"]:
                amount_str = input("შეიყვანეთ თანხა: ")
                if not amount_str.isdigit():
                    print("არასწორი თანხა")
                    continue
                amount = int(amount_str)
                if amount <= 0 or amount > balance:
                    print("არასაკმარისი თანხა")
                    continue

                cards_list = [original_card] + owned_cards + ["უკან დაბრუნება"]
                while True:
                    print("აირჩიეთ ბარათი გადარიცხვისთვის ან უკან დაბრუნება:")
                    for i in range(len(cards_list)):
                        print(str(i + 1) + ") " + cards_list[i])
                    card_choice = input("აირჩიეთ: ")
                    if not card_choice.isdigit():
                        print("არასწორი არჩევანი")
                        continue
                    card_index = int(card_choice) - 1
                    if card_index < 0 or card_index >= len(cards_list):
                        print("არასწორი არჩევანი")
                        continue
                    if cards_list[card_index] == "უკან დაბრუნება":
                        break
                    chosen_card = cards_list[card_index]
                    if chosen_card == original_card or chosen_card in owned_cards:
                        balance -= amount
                        print("გადარიცხვა შესრულდა ბარათით: " + chosen_card)
                        break
                    else:
                        print("თქვენ არ ფლობთ ამ ბარათს")
            else:
                print("არასწორი არჩევანი")

        elif choice == "5":
            confirm = input("ნამდვილად გსურთ გამოსვლა? (დიახ/არა): ").lower()
            if confirm == "დიახ":
                print("გამოსვლა შესრულდა")
                logged_in = False
            else:
                print("დარჩით მთავარ მენიუში")

        else:
            print("არასწორი არჩევანი")







































































































































































































