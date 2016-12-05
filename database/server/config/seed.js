/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Category from '../api/category/category.model';
import Product from '../api/product/product.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Category.find({}).remove()
  .then(() => {
    Category.create({
      name: 'Quần áo & phụ kiện thời trang',
      active: true
    }, {
      name: 'Quần áo',
      active: true
    }, {
      name: 'Phụ kiện thời trang',
      active: true
    },
    {
      name: 'Đồ dùng cho bé',
      active: true
    },
    {
      name: 'Đồ điện tử',
      active: true
    })
    .then(() => {
      // add hierarchical relationship between seeds
      Category.findOne({name: 'Quần áo & phụ kiện thời trang'}).exec(function (err, par) {
        if (err) return;
        console.log('queried parent successfully');
        Category.findOne({name: 'Quần áo'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.parent = par._id;
          child.save();
          console.log('updated child successfully');
        })
        Category.findOne({name: 'Phụ kiện thời trang'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.parent = par._id;
          child.save();
          console.log('updated child successfully');
        })
      })
      console.log('finished seeding categories');
    });
  });

Product.find({}).remove()
  .then(() => {
    Product.create({
      name: 'Áo nữ Forever 21',
      active: true,
      summary: "Áo thời trang giá rẻ dành cho nữ",
      title: "Áo nữ Forever 21 - mùa hè",
      price: 666000,
      stock: 10,
      description: "Áo mặc hè của Forever 21 với giá thành rẻ, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod dolor arcu, at ultricies lorem dignissim vitae. Praesent ut dictum neque, hendrerit euismod nunc. Integer leo nunc, pharetra id placerat ut, imperdiet sed erat. In in augue vehicula, accumsan turpis faucibus, semper diam. Cras mollis feugiat enim, pellentesque finibus turpis lacinia at. Mauris eget placerat ligula, a luctus arcu. Morbi pellentesque turpis vitae nibh dapibus, quis tincidunt nisi dapibus. Nulla facilisi. Fusce et lorem consequat, cursus massa vitae, mattis ipsum. Donec eget imperdiet urna, ac accumsan mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet enim orci. Vivamus sollicitudin condimentum turpis ut varius.",
      imageUrl: "https://s-media-cache-ak0.pinimg.com/236x/37/8b/1a/378b1ab30312c659ab58f69b02149d3a.jpg"
    }, {
      name: 'Đồng hồ Swatch nam',
      active: true,
      summary: "Đồng hồ thời trang giá rẻ dành cho nam",
      title: "Đồng hồ Swatch tháng 12",
      price: 6666000,
      stock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod dolor arcu, at ultricies lorem dignissim vitae. Praesent ut dictum neque, hendrerit euismod nunc. Integer leo nunc, pharetra id placerat ut, imperdiet sed erat. In in augue vehicula, accumsan turpis faucibus, semper diam. Cras mollis feugiat enim, pellentesque finibus turpis lacinia at. Mauris eget placerat ligula, a luctus arcu. Morbi pellentesque turpis vitae nibh dapibus, quis tincidunt nisi dapibus. Nulla facilisi. Fusce et lorem consequat, cursus massa vitae, mattis ipsum. Donec eget imperdiet urna, ac accumsan mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet enim orci. Vivamus sollicitudin condimentum turpis ut varius.",
      imageUrl: "http://cdn2.jomashop.com/media/catalog/product/s/w/swatch-irony-turchesa-chronograph-blue-dial-men_s-watch-ycg413g_1.jpg"
    }, {
      name: 'Đồ chơi trẻ em dành cho trẻ em',
      active: true,
      summary: "Đồ chơi thời trang giá rẻ dành cho trẻ",
      title: "Đồ chơi trẻ em dành cho trẻ em",
      price: 66000,
      stock: 10,
      description: "Cras euismod dolor arcu, at ultricies lorem dignissim vitae. Praesent ut dictum neque, hendrerit euismod nunc. Integer leo nunc, pharetra id placerat ut, imperdiet sed erat. In in augue vehicula, accumsan turpis faucibus, semper diam. Cras mollis feugiat enim, pellentesque finibus turpis lacinia at. Mauris eget placerat ligula, a luctus arcu. Morbi pellentesque turpis vitae nibh dapibus, quis tincidunt nisi dapibus. Nulla facilisi. Fusce et lorem consequat, cursus massa vitae, mattis ipsum. Donec eget imperdiet urna, ac accumsan mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet enim orci. Vivamus sollicitudin condimentum turpis ut varius.",
      imageUrl: "http://cdn.list25.com/wp-content/uploads/2013/11/261-610x360.jpg"
    },
    {
      name: 'Tàu Titanic bơm hơi',
      active: true,
      summary: "Đồ chơi phát triển dành cho trẻ",
      title: "Ta",
      price: 66666000,
      stock: 10,
      description: "Praesent ut dictum neque, hendrerit euismod nunc. Integer leo nunc, pharetra id placerat ut, imperdiet sed erat. In in augue vehicula, accumsan turpis faucibus, semper diam. Cras mollis feugiat enim, pellentesque finibus turpis lacinia at. Mauris eget placerat ligula, a luctus arcu. Morbi pellentesque turpis vitae nibh dapibus, quis tincidunt nisi dapibus. Nulla facilisi. Fusce et lorem consequat, cursus massa vitae, mattis ipsum. Donec eget imperdiet urna, ac accumsan mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet enim orci. Vivamus sollicitudin condimentum turpis ut varius.",
      imageUrl: "http://cdn4.list25.com/wp-content/uploads/2013/11/313-610x360.jpg"
    },
    {
      name: 'Máy dịch tiếng con gái',
      active: true,
      summary: "Đồ điện tử thời trang giá rẻ dành cho mọi giới tính",
      title: "Máy dịch tiếng con gái",
      price: 666666000,
      stock: 10,
      description: "Integer leo nunc, pharetra id placerat ut, imperdiet sed erat. In in augue vehicula, accumsan turpis faucibus, semper diam. Cras mollis feugiat enim, pellentesque finibus turpis lacinia at. Mauris eget placerat ligula, a luctus arcu. Morbi pellentesque turpis vitae nibh dapibus, quis tincidunt nisi dapibus. Nulla facilisi. Fusce et lorem consequat, cursus massa vitae, mattis ipsum. Donec eget imperdiet urna, ac accumsan mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet enim orci. Vivamus sollicitudin condimentum turpis ut varius.",
      imageUrl: "https://i.ytimg.com/vi/ezVib_giTFo/maxresdefault.jpg"
    })
    .then(() => {
      // add hierarchical relationship between seeds
      Category.findOne({name: 'Quần áo & phụ kiện thời trang'}).exec(function (err, par) {
        if (err) return;
        console.log('queried parent successfully');
        Product.findOne({name: 'Áo nữ Forever 21'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.categories.push(par._id);
          child.save();
          console.log('updated child successfully');
        })
        Product.findOne({name: 'Đồng hồ Swatch nam'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.categories.push(par._id);
          child.save();
          console.log('updated child successfully');
        })
      })
      Category.findOne({name: 'Đồ dùng cho bé'}).exec(function (err, par) {
        if (err) return;
        console.log('queried parent successfully');
        Product.findOne({name: 'Đồ chơi trẻ em dành cho trẻ em'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.categories.push(par._id);
          child.save();
          console.log('updated child successfully');
        })
        Product.findOne({name: 'Tàu Titanic bơm hơi'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.categories.push(par._id);
          child.save();
          console.log('updated child successfully');
        })
      })
      Category.findOne({name: 'Đồ điện tử'}).exec(function (err, par) {
        if (err) return;
        console.log('queried parent successfully');
        Product.findOne({name: 'Máy dịch tiếng con gái'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.categories.push(par._id);
          child.save();
          console.log('updated child successfully');
        })
        Product.findOne({name: 'Tàu Titanic bơm hơi'}).exec(function (err, child) {
          if (err) return;
          console.log('queried child successfully');
          child.categories.push(par._id);
          child.save();
          console.log('updated child successfully');
        })
      })
      console.log('finished seeding categories');
    });
  });