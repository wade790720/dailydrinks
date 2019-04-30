const totalAmount = (list) => {
    return list.reduce((prev, curr) => {
        return prev + curr.price * 1
    }, 0);
};

export default totalAmount;