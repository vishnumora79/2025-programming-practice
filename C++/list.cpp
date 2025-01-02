#include <iostream>
#include <list>

using namespace std;


int main () {

    list<int> numbers = {5, 4 ,3, 7};
    cout << "elements in linkedlist:";
    for(int number : numbers) {
        cout << number << " ";
    }
    cout << "\n";

    cout << "number of elements in linkedlist: ";
    cout << numbers.size();

    cout << endl;

    cout << "first element in linked list: ";
    cout << numbers.front();

    cout << endl;

    cout << "first element in linked list: ";
    cout << numbers.back();

    cout << endl;

    numbers.push_front(9);
    numbers.push_back(8);

    cout << "\n";

    cout << "number of elements in linkedlist: ";
    cout << numbers.size();

    cout << "\n";

    numbers.pop_back();
    numbers.pop_front();

    cout << "\n";

    cout << "number of elements in linkedlist: ";
    cout << numbers.size();

    cout << "\n";

    cout << numbers.empty();

    return 0;
}