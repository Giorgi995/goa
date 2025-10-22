diks = {
     'a': 1;
     'b': 2;
     'c': 3;
     'd': 4;
     'e': 5
}
diks.update({'f' 6})
diks.pop('a')
diks.popitem('b')
diks['a'] = 10


nums=[1,3,4,5,8,6,9]
new_list=[]
for i in nums:
    if i % 5 == 2:
        new_list.append(i*5)

nums=[1,3,4]
new_list=[x + 4 for x in nums]
print(new_list) # [5,6,7]

nums=[7,2,5,8]
new_list=[x for x in nums if x % 7 == 0]
print(new_list) 

try:
   num = int(input)
   print(10 / num)
except ZeroDivisionError:
   print("ნულზე ვერ გაიყოფა")
except ValueError:
   print("შეიყვანეტ რიცხვი")
else:
   print("პრობლემა არ იყო")
finally:
   print("დასრულებულია")





