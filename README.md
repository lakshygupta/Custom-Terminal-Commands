# Custom Terminal Commands using NodeJS 🚀
It is used to display or make a copy content of one or more files in the terminal.

## Custom Commands Implemented

### Main Commands
1. ```lcat "filepath"``` &#8594; displays content of the file in the terminal
2. ```lcat "filepath1" "filepath2" "filepath3" ...``` &#8594; displays content of all files in the terminal(contactinated form) in the given order
3. ```lcat -s "filepath"``` &#8594; convert bigger line breaks into a singular line break
4. ```lcat -n "filepath"``` &#8594; give numbering to all the lines
5. ```lcat -b "filepath"``` &#8594; give numbering to non-empty lines
6. ```lcat "filePath" > filename2Path``` &#8594; put all the content of filename into filename2Path by overriding and also creates filename2 if it doesn't exist
7. ```lcat "filePath" >> filename2Path``` &#8594; append all the content of filename into filename2Path and also creates filename2 if it doesn't exist
8. ```lcat -s "filename" > filename2``` &#8594; get the file content of filename remove large spaces and save the output in filename2

### Combine Multiple Commands
9. ```lcat -s -n "filepath" "filepath2" ...``` &#8594; convert bigger line breaks into a singular line break and give numbering to all the lines
10. ```lcat -s -b "filepath" "filepath2" ...``` &#8594; convert bigger line breaks into a singular line break and give numbering to non-empty lines

### -s , -n and -b order do not matter, Write them anywhere in the query.

## How to install
- Clone this repository.
- Make sure you have latest version of ```Node.js LTS``` installed in your system.
- Open the CMD/Terminal in the folder and run the command ```npm link```
- It will make ```lcat``` as a global command on your system. (lcat is small 'L' cat)
- That's it.

## Images
### Main Commands
![1](https://user-images.githubusercontent.com/40179909/120108148-86b6c900-c181-11eb-8fad-8bc464c82cf4.PNG)
![2](https://user-images.githubusercontent.com/40179909/120108173-a3eb9780-c181-11eb-8053-4c2b38e1deea.PNG)
![3](https://user-images.githubusercontent.com/40179909/120108178-acdc6900-c181-11eb-9ce2-0188b1ae0b52.PNG)

### Combine Multiple Commands
![4](https://user-images.githubusercontent.com/40179909/120108179-ad74ff80-c181-11eb-96a7-d689ad0971fd.PNG)
![5](https://user-images.githubusercontent.com/40179909/120108180-ad74ff80-c181-11eb-8181-2a11a023d9a9.PNG)

### Command 6
![6](https://user-images.githubusercontent.com/40179909/120108181-ae0d9600-c181-11eb-9556-00debf5a35b9.PNG)
##### NewFile is created
![7](https://user-images.githubusercontent.com/40179909/120108182-aea62c80-c181-11eb-91d2-d121fc4ca72f.PNG)
