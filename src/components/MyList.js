import React from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';

//my components
import MyCard from './MyCard'



export default class MyList extends React.Component {

  state = {
    refreshing: false
  }



  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 0;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.props.pullRefresh()
    setTimeout(() => this.setState({ refreshing: false }), 2000)
  }


  render() {
    return (
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }
        onScroll={({ nativeEvent }) => {
          if (this.isCloseToBottom(nativeEvent)) {
            this.props.onEndReached()
          }
        }}
        scrollEventThrottle={400}>
        {
          this.props.data.map(element => <MyCard img={element.img} txt={element.txt} action={element.action}rtl={this.props.rtl} />)
        }
      </ScrollView>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
