// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import SearchScreen from './src/screens/SearchScreen';
// import ProjectList from './src/ProjectList';

// const navigator = createStackNavigator({
//   Search: SearchScreen,
//   Project: ProjectList
// }, 
// {
//   initalRouteName: 'Project',
//   defaultNavigationOptions: {
//     title: 'Business'
//   }
// });

// export default createAppContainer(navigator);







import React, { Component } from 'react';
import { View, } from 'react-native';
import { createAppContainer } from "react-navigation"; // Version can be specified in package.json
import { createStackNavigator } from "react-navigation-stack"; // Version can be specified in package.json

import ProjectList from './src/ProjectList';
import DashBoard from './src/DashBoard';

// Đăng ký navigation cho dự án
const AppNavigator = createStackNavigator(
  {
    
    ProjectList: {
      // screen: là tham số dùng để định danh tên màn hình, có thể viết hoa hay viết thường
      screen: ProjectList,
      // When `HomeScreen` được load bởi StackNavigator, nó sẽ đưa ra `navigation` prop.
      navigationOptions: () => ({
        title: 'ProjectList',
      })
    }, // end projectlist
    DashBoard: {
      // screen: là tham số dùng để định danh tên màn hình, có thể viết hoa hay viết thường
      screen: DashBoard,
      // When `HomeScreen` được load bởi StackNavigator, nó sẽ đưa ra `navigation` prop.
      navigationOptions: () => ({
        title: 'DashBoard',
      })
    },

  },
  {
    // đặt màn hình mặc định xuất hiên là Home
    initialRouteName: "ProjectList"
  }
);

export default createAppContainer(AppNavigator);
