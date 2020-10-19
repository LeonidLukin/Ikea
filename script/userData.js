

const  userData = {
    wishListData: ['idd005', 'idd100', 'idd077', 'idd033'],
    get wishList() {
        return this.wishListData;
    },
    set wishList(id) {
        if (this.wishListData.includes(id)) {
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1)
        }
        this.wishListData.push(id)
    },

    cartListData: [
        {
            id: 'idd0015',
            count: 3
        },
        {
            id: 'idd0045',
            count: 1
        },
        {
            id: 'idd0095',
            count: 2
        },
    ],
};

export default userData;