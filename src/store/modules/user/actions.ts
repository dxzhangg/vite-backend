export default {
    search(context:any) {
        context.commit('setList', [
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            },
        ])
        context.commit('setMate', {
            total: 100,
        })
    }
}