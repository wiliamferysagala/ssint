import numpy as np
import matplotlib.pyplot as plt

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)

names = ['Alice', 'Bob', 'Charlie']

user = [{'name': name, 'age': np.random.randint(20, 30)} for name in names]

print(user)


vektor = np.array([1, 2, 3])
print("vektor:\n", vektor)

matriks =  np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("matriks:\n", matriks)
plt.imshow(matriks, cmap='hot')
plt.colorbar()
plt.show()