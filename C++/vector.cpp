#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    vector<string> carBrands = {"KIA", "VOLVO"};

    for(string brands : carBrands) {
        cout << brands << " ";
    }

    cout << "\n";

    cout << carBrands.front();

    cout << "\n";

    cout << carBrands.back();
    
    carBrands.push_back("TATA");

    cout << "\n";

    cout << carBrands[2];

    carBrands.pop_back();

    cout << endl;

    cout << carBrands.size();

    cout << endl;

    cout << carBrands.empty();

}