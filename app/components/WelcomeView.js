
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GView from './lib/GView';
import GText from './lib/GText';
import GSvg from './lib/GSvg';

import icons from '../icons';

import i18n from '../i18n';

import {
  appBackgroundColor,
} from '../constants/baseStyles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default class App extends Component {
  static propTypes = {
    openSetPickerModal: PropTypes.func.isRequired,
    openAttributionsModal: PropTypes.func.isRequired,
    openStudyDetailModal: PropTypes.func.isRequired,
  }

  onStartButtonPress = () => {
    this.props.openSetPickerModal();
  }

  onAttributionsButtonPress = () => {
    this.props.openAttributionsModal();
  }

  onStudyDetailButtonPress = () => {
    this.props.openStudyDetailModal();
  }

  render() {
    return (
      <GView style={styles.main} centerContents>
        <GView padded centerContents>
          <GView padded alignItemsCenter>
            <GText txtC type="headline">
              {i18n.t('appTitle')}
            </GText>
            <GView padded>
              <GSvg
                svgXmlData={icons.loveQuestion}
                size="big"
                backgroundColor={appBackgroundColor}
              />
            </GView>
          </GView>
        </GView>
        <GView padded>
          <GButton
            onPress={this.onStartButtonPress}
            title={i18n.t('start')}
            spaced
          />
          <GButton
            type="secondary"
            onPress={this.onStudyDetailButtonPress}
            title={i18n.t('studyDetails.buttonLabel')}
            spaced
          />
          <GButton
            type="secondary"
            onPress={this.onAttributionsButtonPress}
            title={i18n.t('attributions.buttonLabel')}
            spaced
          />
        </GView>
      </GView>
    );
  }
}
