const totalAmount = (list) => {
    if (list.length === 0) return 0;
    if (list.filter(item => isNaN(item.price)).length > 0) return -1;
    return list.reduce((prev, curr) => {
        return prev + curr.price * 1
    }, 0);
};

export default totalAmount;