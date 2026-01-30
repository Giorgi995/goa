#შექმენით პროგრამა, რომელიც:

#•    კლავიატურიდან მიიღებს ტექსტს (მინიმუმ 4 სიტყვა)
#•    შეინახავს ამ ტექსტს words.txt ფაილში
#•    წაიკითხავს ფაილს და შეასრულებს შემდეგ ოპერაციებს:
#დათვლის თანხმოვანი ასოების რაოდენობას,
#იპოვის ყველაზე მოკლე სიტყვას,
#გადაიყვანს ყველა დიდ ასოს პატარა ასოში და პირიქით (swap case),
#•    დამუშავებული ტექსტი შეინახოს processed.txt ფაილში
#•    კონსოლში გამოიტანოს: სიტყვების რაოდენობა, თანხმოვნები და ყველაზე მოკლე სიტყვა

text = input("sheiyvanet teqsti (minimum 4 sityva): ")

#sityvebis shemocmeba
words = text.split()
if len(words) < 4:
    print("shedstoma: teqsti unda sheicavdes minimum 4 sityvas")
else:
    # word.txt pailshi shenaxva
    with open("words.txt", "w", encoding = "utf-8") as file:
        file.write(text)

    #asoebisa da sityvebis raodenoba
    letter_count = sum(1 for char in text if char.isalpha())
    word_count = len(words)

    #swap case (didi patara asoebi)
    swapped_text = text.swapcase()

    #proccesd.txt pailshi shenaxva
    with open("proccesd.txt", "w", encoding="utf-8") as file:
        file.write(swapped_text)
    
    #shedegabis gamotana
    print("carmatebit shesrulda:")
    print("asoebis raodenoba:", letter_count)
    print("sityvebis raodenoba:", word_count)
    print("damushavebuli teqsti:")
    print(swapped_text)