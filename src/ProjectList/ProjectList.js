
/**
 * Hiển thị danh sách dự án, id, name, company, task_count
 * **/

import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './ProjectList.styles';
import { ListItem, SearchBar } from 'react-native-elements';
import {
  Container, Content, Card, CardItem, Button, Icon, Left, Body, Right, Item, Input, Header
} from 'native-base';

let json_data = require('../json/project.json')

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = []; // sử dụng cho việc tìm kiếm

  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({
      data: json_data,
      loading: false,
    });
    this.arrayholder = json_data
    // alert(json_data[0].name)


    // const url = `https://randomuser.me/api/?&results=500`;
    // const url = `http://localhost/json/project.json`;
    // this.setState({ loading: true });

    // // fetch(base_url, request)
    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       data: res.results,
    //       error: res.error || null,
    //       loading: false,
    //     });
    //     this.arrayholder = res.results;
    //   })
    //   .catch(error => {
    //     this.setState({ error, loading: false });
    //   });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.id.toUpperCase()} 
                        ${item.name.toUpperCase()} 
                        ${item.company.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        {/* <Header /> */}

        <FlatList
          data={this.state.data}
          renderItem={item => this.renderItem(item)} // Gọi đến function renderItem
          keyExtractor={item => item.id} // Key phải là giá trị duy nhất
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }

  // Format nội dung cho 1 item trong list
  renderItem = ({ item }) => {
    return (
      <View>
        <ListItem
          button onPress={() => { this.onPress_btnTasks(item) }} // Khi Click vào Item
          leftAvatar={{ source: { uri: item.logo } }}
          // title={`${item.id} - ${item.name}`} // Khi cần nối chuỗi dữ liệu
          title={item.name} // Khi cần nối chuỗi dữ liệu
          // title= {item.customer}
          subtitle={
            <View>
              <Text>Company: {item.company}</Text>
            </View>
          }// subtitle
          chevron // Icon > bên phải
        />
        {/* <CardItem>
          <Body>
            <Text onPress={() => { this.onPress_ListItem(item) }}>
              Dịch vụ chăm sóc cây xanh và vệ sinh văn phòng.
              </Text>
            <Text note onPress={() => { this.onPress_ListItem(item) }}>
              Yêu cầu công nhân CheckIn/CheckOut, khai TimeSheet
              </Text>
          </Body>
        </CardItem> */}
        <CardItem>
          <Left>
            <Button onPress={() => { this.onPress_btnCheckInCheckOut(item) }} transparent><Icon active name="navigate" /><Text>&nbsp;Check I/O</Text></Button>
            <Button onPress={() => { this.onPress_Plan(item) }} transparent><Icon active name="clock" /><Text>&nbsp;Plan</Text></Button>
            <Button onPress={() => { this.onPress_btnTasks(item) }} transparent><Icon active name="cog" Time /><Text>&nbsp;{item.task_count} Tasks</Text></Button>
            <Button onPress={() => { this.onPress_btnTimeSheet(item) }} transparent><Icon active name="clock" /><Text>&nbsp;TS</Text></Button>
            <Button onPress={() => { this.onPress_btnMember(item) }} transparent><Icon active name="person" /><Text>&nbsp;Member</Text></Button>
          </Left>
        </CardItem>
      </View>


    ); // return
  } // renderItem

  onPress_ListItem = (item) => {
    // alert(item.address);
    this.props.navigation.navigate("ProjectDetail",{
      id: item.id,
      name: item.name
    });
  } // onPress_ListItem

  onPress_Plan = (item) => {
    // alert(item.address);
    this.props.navigation.navigate("PlanList", {
      id: item.id,
      name: item.name,
    });
  } // onPress_ListItem

  onPress_btnTasks = (item) => {
    this.props.navigation.navigate("TaskList",{
      id:item.id,
      name:item.name,
    });
  } // onPress_btnTasks

  onPress_btnTimeSheet = (item) => {
    this.props.navigation.navigate("TaskDetail",{
      id:item.id,
      name:item.name,
    });

  } // onPress_btnTimeSheet

  onPress_btnCheckInCheckOut = (item) => {
    this.props.navigation.navigate("CheckIn", {
      id: item.id,
      name: item.name,
    });

  } // onPress_btnCheckInCheckOut

  onPress_btnMember = (item) => {
    this.props.navigation.navigate("MemberList",{
      id:item.id,
      name:item.name,
    });

  } // onPress_btnMember
}

export default ProjectList;
// export default createAppContainer(AppNavigator);

