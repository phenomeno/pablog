class BlogInfoModel {
    static get(cb) {
        cb({
            photoURL: '/img/goreh.jpg',
            title: 'Grace IRL',
            bio: 'Official Kumcher'
        });
    }
}

module.exports = BlogInfoModel;
