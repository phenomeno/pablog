import $ from 'jquery';
class PostsModel {
    static get(cb) {
        if (!global.__SERVER__) {
            $.get('/api/v1/posts', cb);
        }
    }
}

module.exports = PostsModel;
