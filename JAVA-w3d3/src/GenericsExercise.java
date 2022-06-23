class GenericsExercise {

    public static void main(String[] args) {
        // System.out.printf("Max of %d, %d and %d is %d\n\n", 3, 4, 5,
        //     MaximumTest.maximum(3, 4, 5));

        // System.out.printf("Max of %.1f,%.1f and %.1f is %.1f\n\n", 6.6, 8.8, 7.7,
        //     MaximumTest.maximum(6.6, 8.8, 7.7));

       System.out.printf("Max of %d, %d and %d is %d\n\n", 3, 4, 5,
        GenericClass.maximum(3, 4, 5));

        System.out.printf("Max of %.1f,%.1f and %.1f is %.1f\n\n", 6.6, 8.8, 7.7,
        GenericClass.maximum(6.6, 8.8, 7.7));
     
    }
}


class GenericClass{
    
    public static <T extends Number> T maximum(T obj1, T obj2, T obj3){
        T max;
        max = obj1;

        if (obj2.doubleValue() > max.doubleValue()) {
            max = obj2; // y is the largest so far
        }

        if (obj3.doubleValue() > max.doubleValue()) {
            max = obj3; // z is the largest now
        }
        return max;
        
    }
}


// class MaximumTest{
//     // determines the largest of three Comparable objects
//     public static int maximum (int x, int y, int z) {
//         int max = x; // assume x is initially the largest

//         if (y > max) {
//             max = y; // y is the largest so far
//         }

//         if (z > max) {
//             max = z; // z is the largest now
//         }
//         return max; // returns the largest object
//     }

//     public static double maximum(double x, double y, double z) {
//         double max = x; // assume x is initially the largest

//         if (y > max) {
//             max = y; // y is the largest so far
//         }

//         if (z > max) {
//             max = z; // z is the largest now
//         }
//         return max; // returns the largest object
//     }
    
// }

