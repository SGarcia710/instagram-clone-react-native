import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {StoryItem} from '../';

const {width} = Dimensions.get('window');
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === 'ios' ? 2 : 1.2;
// This ratio works fine on ios, but the most close and decent effect in android is that 1.2 with the space between images. It could be great to get some advice to fix this on android. 🦄

export class Stories extends PureComponent {
  stories = [];
  indexes = [];

  state = {
    x: new Animated.Value(0),
    ready: false,
  };

  constructor(props) {
    super(props);
    this.stories = props.stories.map(() => React.createRef());
  }

  async componentDidMount() {
    const {x} = this.state;
    await x.addListener(() =>
      this.stories.forEach((story, index) => {
        this.indexes.push(this.props.stories[index]._id);
        const offset = index * width;
        const inputRange = [offset - width, offset + width];
        const translateX = x
          .interpolate({
            inputRange,
            outputRange: [width / ratio, -width / ratio],
            extrapolate: 'clamp',
          })
          .__getValue();

        const rotateY = x
          .interpolate({
            inputRange,
            outputRange: [`${angle}rad`, `-${angle}rad`],
            extrapolate: 'clamp',
          })
          .__getValue();

        const parsed = parseFloat(
          rotateY.substr(0, rotateY.indexOf('rad')),
          10,
        );
        const alpha = Math.abs(parsed);
        const gamma = angle - alpha;
        const beta = Math.PI - alpha - gamma;
        const w = width / 2 - ((width / 2) * Math.sin(gamma)) / Math.sin(beta);
        const translateX2 = parsed > 0 ? w : -w;

        const style = {
          transform: [
            {perspective},
            {translateX},
            {rotateY},
            {translateX: translateX2},
          ],
        };
        story.current.setNativeProps({style});
      }),
    );
    setTimeout(
      () =>
        this.scroll.scrollTo({
          x: width * this.indexes.indexOf(this.props.selectedStory._id),
          y: 0,
          animated: false,
        }),
      100,
    );
  }

  _handleSelectedStoryOnLoaded = () => {
    this.setState({ready: true});
  };

  _handleSwipeLeftRight = () => {
    alert('swipe');
  };

  render() {
    const {x, ready} = this.state;
    const {stories, selectedStory, footerComponent} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {!ready && (
            <View
              style={{
                flex: 1,
                zIndex: 9999,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}
          {stories
            .map((story, i) => (
              <Animated.View
                ref={this.stories[i]}
                style={StyleSheet.absoluteFill}
                key={story.url.toString()}>
                <StoryItem
                  footerComponent={footerComponent}
                  handleSelectedStoryOnLoaded={
                    this._handleSelectedStoryOnLoaded
                  }
                  selectedStory={selectedStory}
                  {...{story}}
                />
              </Animated.View>
            ))
            .reverse()}
          <Animated.ScrollView
            ref={(scroller) => {
              this.scroll = scroller;
            }}
            style={StyleSheet.absoluteFillObject}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToInterval={width}
            contentContainerStyle={{width: width * stories.length}}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            decelerationRate={0.99}
            horizontal
          />
        </View>
      </SafeAreaView>
    );
  }
}
