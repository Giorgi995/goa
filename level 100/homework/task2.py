 #შექმენით პროგრამა სტუდენტების ქულების მართვისთვის:

#•    შექმენით dictionary სტრუქტურა სადაც:
#Key არის სტუდენტის სახელი,
#Value არის მისი ქულების სია (მინიმუმ 5 საგნის ქულა),
#•    შექმენით ფუნქციები:
#calculate_average(scores) - ითვლის საშუალო ქულას,
#get_grade(average) - აბრუნებს შეფასებას (A: 91-100, B: 81-90, C: 71-80, D: 61-70, E: 51-60, FX: 41-50, F: 0-40),
#find_top_student(students_dict) - პოულობს საუკეთესო სტუდენტს,
#•    მინიმუმ 5 სტუდენტისთვის:
#გამოთვალეთ საშუალო ქულა,
#განსაზღვრეთ შეფასება,
#დაალაგეთ სტუდენტები საშუალო ქულის მიხედვით (კლებადობით),
#•    შედეგები გამოიტანეთ ფორმატირებული სახით

students = {
    "Giorgi": [85, 90, 78, 88, 92],
    "Nino": [70, 75, 68, 72, 74],
    "Luka": [95, 93, 97, 96, 94],
    "Ana": [55, 60, 58, 62, 57],
    "Mari": [40, 45, 42, 38, 41],
}
# sashualo kulis gamotvla
def colculator_average(scores):
    return sum(scores) / len(scores)
# shepasebis dadgena sashualos mixedvit 
def get_grade(average):
    if 91 <= average <= 100:
         return "A"
    elif 81 <= average <= 90:
         return "B"
    elif 71 <= average <= 80:
         return "C"
    elif 61 <= average <= 70:
         return "D"
    elif 51 <= average <= 60:
         return "E"
    elif 41 <= average <= 50:
         return "FX"
    else:
         return"F"
    # konkretuli studentis mocebna
    def find_top_student(students_dict):
        top_student = ""
        highest_avg = 0

        for name, scores in students_dict.items():
            avg = calculate_average(scores)
            if avg > highest_avg:
                highest_avg = avg 
                top_student = name
        return top_student, highest_avg
    # yvela studentis monacemebis gamotana
    print("studentebis shedegebi: /n")

    for name, scores in students.items():
         avg = calculator_average(scores)
         grade = get_grade(avg)
         print(f" studenti: {name}")
         print  