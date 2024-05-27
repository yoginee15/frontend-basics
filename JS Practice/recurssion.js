function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  pow(2, 3)

// 
1.
x=2, n=3
else -> return 2 * pow(2,2) // 2*4 = 8
                    |-> //x=2, n=2
                            else return 2*pow(2,1) = 2 *2 = 4
                                           |-> x=2, n=1
                                                 if return 2;