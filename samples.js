
function getSamples() {
  let samples = [];
  samples.push("\/\/ Type your code here, or load a sample.\n");
  samples.push("\/\/ Binary search\n"
    + "\n"
    + "fn binary_search(arr, key) {\n"
    + "  mut low = 0;\n"
    + "  mut high = len(arr) - 1;\n"
    + "  while (low <= high) {\n"
    + "    val middle = to_int((low + high) / 2);\n"
    + "    val cmp = compare(key, arr[middle]);\n"
    + "    if (cmp > 0) {\n"
    + "      low = middle + 1;\n"
    + "      continue;\n"
    + "    }\n"
    + "    if (cmp < 0) {\n"
    + "      high = middle - 1;\n"
    + "      continue;\n"
    + "    }\n"
    + "    return middle;\n"
    + "  }\n"
    + "  return -1;\n"
    + "}\n"
    + "\n"
    + "val arr = [ -1, 0, 3, 5, 9, 12 ];\n"
    + "println(binary_search(arr, 9));");

  samples.push("\/\/ Factorial\n"
    + "\n"
    + "fn factorial(n) {\n"
    + "  if (n == 0)\n"
    + "    return 1;\n"
    + "  return n * factorial(n - 1);\n"
    + "}\n"
    + "\n"
    + "println(factorial(8));");

  samples.push("\/\/ Fibonnaci\n"
    + "\n"
    + "fn fibonnaci(n) {\n"
    + "  if (n < 2)\n"
    + "    return n;\n"
    + "  return fibonnaci(n - 1) + fibonnaci(n - 2);\n"
    + "}\n"
    + "\n"
    + "println(fibonnaci(8));");

  samples.push("\/\/ Fizz buzz\n"
    + "\n"
    + "foreach (i in 1 .. 10) {\n"
    + "  if (i % 3 == 0 && i % 5 == 0) {\n"
    + "    println(\"FizzBuzz\");\n"
    + "    continue;\n"
    + "  }\n"
    + "  if (i % 3 == 0) {\n"
    + "    println(\"Fizz\");\n"
    + "    continue;\n"
    + "  }\n"
    + "  if (i % 5 == 0) {\n"
    + "    println(\"Buzz\");\n"
    + "    continue;\n"
    + "  }\n"
    + "  println(i);\n"
    + "}");

  samples.push("\/\/ Hello, world\n"
    + "\n"
    + "println(\"Hello, world!\");");

  samples.push("\/\/ Knuth shuffle\n"
    + "\n"
    + "import { random } from math;\n"
    + "\n"
    + "fn shuffle(mut arr) {\n"
    + "  val n = len(arr);\n"
    + "  for (mut i = n - 1; i >= 0; i -= 1) {\n"
    + "    val j = to_int(random() * (i - 1));\n"
    + "    val tmp = arr[i];\n"
    + "    arr[i] = arr[j];\n"
    + "    arr[j] = tmp;\n"
    + "  }\n"
    + "  return arr;\n"
    + "}\n"
    + "\n"
    + "val arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n"
    + "println(shuffle(arr));");

  samples.push("\/\/ Mandelbrot set\n"
    + "\n"
    + "import { floor } from math;\n"
    + "val pixels = [\" \", \".\", \":\", \";\", \"+\", \"=\", \"x\", \"X\", \"$\", \"&\"];\n"
    + "\n"
    + "val y_min = -0.2;\n"
    + "val y_max = 0.1;\n"
    + "val x_min = -1.5;\n"
    + "val x_max = -1.1;\n"
    + "\n"
    + "for (mut y_pixel = 0; y_pixel < 24; y_pixel++) {\n"
    + "  val y = (y_pixel / 24) * (y_max - y_min) + y_min;\n"
    + "  for (mut x_pixel = 0; x_pixel < 80; x_pixel++) {\n"
    + "    val x = (x_pixel / 79) * (x_max - x_min) + x_min;\n"
    + "    mut pixel = \" \";\n"
    + "    mut x0 = x;\n"
    + "    mut y0 = y;\n"
    + "    for (mut iter = 0; iter < 80; iter++) {\n"
    + "      mut x1 = (x0 * x0) - (y0 * y0);\n"
    + "      mut y1 = 2 * x0 * y0;\n"
    + "      x1 = x1 + x;\n"
    + "      y1 = y1 + y;\n"
    + "      x0 = x1;\n"
    + "      y0 = y1;\n"
    + "      val d = (x0 * x0) + (y0 * y0);\n"
    + "      if (d > 4) {\n"
    + "        pixel = pixels[floor(iter / 8)];\n"
    + "        break;\n"
    + "      }\n"
    + "    }\n"
    + "    print(pixel);\n"
    + "  }\n"
    + "  println(\"\");\n"
    + "}");

  samples.push("\/\/ Quicksort\n"
    + "\n"
    + "fn sort(mut arr) {\n"
    + "  val n = len(arr);\n"
    + "  if (n <= 1)\n"
    + "    return arr;\n"
    + "  val pivot = arr[0];\n"
    + "  mut left = []; \n"
    + "  mut right = [];\n"
    + "  for (mut i = 1; i < n; i++) {\n"
    + "    if (arr[i] < pivot)\n"
    + "      left[] = arr[i];\n"
    + "    else\n"
    + "      right[] = arr[i];\n"
    + "  }\n"
    + "  arr = sort(left);\n"
    + "  arr[] = pivot;\n"
    + "  arr += sort(right);\n"
    + "  return arr;\n"
    + "}\n"
    + "\n"
    + "println(sort([5, 2, 7, 3, 0, 1, 4, 6]));");

  samples.push("\/\/ Rule 110\n"
    + "\n"
    + "val size = 50;\n"
    + "mut prev = [];\n"
    + "mut i;\n"
    + "\n"
    + "i = 0;\n"
    + "while (i < size - 1) {\n"
    + "  prev[] = false;\n"
    + "  i++;\n"
    + "}\n"
    + "prev[] = true;\n"
    + "\n"
    + "fn calc(p, i) {\n"
    + "  val prev = p[i - 1];\n"
    + "  val curr = p[i];\n"
    + "  val next = p[i + 1];\n"
    + "  if (prev && curr && next) {\n"
    + "    return false;\n"
    + "  }\n"
    + "  if (prev && curr && !next) {\n"
    + "    return true;\n"
    + "  }\n"
    + "  if (prev && !curr && next) {\n"
    + "    return true;\n"
    + "  }\n"
    + "  if (prev && !curr && !next) {\n"
    + "    return false;\n"
    + "  }\n"
    + "  if (!prev && curr && next) {\n"
    + "    return true;\n"
    + "  }\n"
    + "  if (!prev && curr && !next) {\n"
    + "    return true;\n"
    + "  }\n"
    + "  if (!prev && !curr && next) {\n"
    + "    return true;\n"
    + "  }\n"
    + "  return false;\n"
    + "}\n"
    + "\n"
    + "i = 0;\n"
    + "while (i < size) {\n"
    + "  mut line = [false];\n"
    + "  mut j;\n"
    + "  j  = 1;\n"
    + "  while (j < size - 1) {\n"
    + "    line[] = calc(prev, j);\n"
    + "    j++;\n"
    + "  }\n"
    + "  line[] = false;\n"
    + "  mut output = \"\";\n"
    + "  j = 0;\n"
    + "  while (j < size) {\n"
    + "    output += if (line[j]) \"*\" else \" \";\n"
    + "    j++;\n"
    + "  }\n"
    + "  println(output);\n"
    + "  prev = line;\n"
    + "  i++;\n"
    + "}");

  samples.push("\/\/ Tower of Hanoi\n"
    + "\n"
    + "fn hanoi(n, src, dest, aux) {\n"
    + "  if (n == 1) {\n"
    + "    println(\"Move disk 1 from rod \" + src + \" to rod \" + dest + \".\");\n"
    + "    return;\n"
    + "  }\n"
    + "  hanoi(n - 1, src, aux, dest);\n"
    + "  println(\"Move disk \" + to_string(n) + \" from rod \" + src + \" to rod \" + dest + \".\");\n"
    + "  hanoi(n-1, aux, dest, src);\n"
    + "}\n"
    + "\n"
    + "val n = 4;\n"
    + "hanoi(n, \"A\", \"C\", \"B\");");

  return samples;
}
