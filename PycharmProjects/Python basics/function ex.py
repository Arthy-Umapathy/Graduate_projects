def do_twice(f, val):
    
    f(val)
    f(val)


def print_spam(val):
    print('spam' + str(val))


do_twice(print_spam, 1)
