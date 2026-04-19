def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid  # ვაბრუნებთ ინდექსს

        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # თუ ელემენტი ვერ მოიძებნა


# მაგალითი გამოყენება
numbers = [1, 3, 5, 7, 9, 11, 13, 15]
result = binary_search(numbers, 7)

if result != -1:
    print("ელემენტი ნაპოვნია ინდექსზე:", result)
else:
    print("ელემენტი ვერ მოიძებნა")




