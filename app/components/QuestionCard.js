
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import GButton from './lib/GButton';
import GText from './lib/GText';
import GView from './lib/GView';
import GSvg from './lib/GSvg';

import icons from '../icons';

import {
  body,
  paddingM,
  cardBackgroundColor,
  cardBorderColor,
} from '../constants/baseStyles';

const styles = StyleSheet.create({
  outter: {
    flex: 1,
    flexGrow: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',

    borderRadius: 30,
    borderWidth: 10,
    borderColor: cardBorderColor,
    padding: 20,
    backgroundColor: cardBackgroundColor,
  },
  shadow: {
    flex: 1,
    position: 'absolute',
    top: 2,
    left: 2,
    bottom: -2,
    right: -2,
    backgroundColor: '#555555',
    borderRadius: 30,
  },
  copyContainer: {
    flexGrow: 1,
    paddingTop: paddingM,
  },
  footer: {
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copy: body,
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  pageButtonView: {},
  pageButtonText: {},
});

export default class extends Component {
  static propTypes = {
    copy: PropTypes.string.isRequired,
    icon: PropTypes.string,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    icon: null,
  }

  render() {
    const {
      next,
      prev,
      isFirst,
      isLast,
      copy,
      icon,
    } = this.props;

    const prevButton = !isFirst && (
      <GButton
        title="<"
        onPress={prev}
        type="secondary"
        textStyle={styles.pageButtonText}
        viewStyle={styles.pageButtonView}
      />
    );
    const nextButton = !isLast && (
      <GButton
        title=">"
        onPress={next}
        type="secondary"
        textStyle={styles.pageButtonText}
        viewStyle={styles.pageButtonView}
      />
    );

    return (
      <GView style={styles.outter} >
        <GView style={styles.shadow} />
        <GView style={styles.contentContainer} >
          <GView horizontal centerContents>
            {icon && (<GSvg svgXmlData={icons[icon]} />)}
          </GView>
          <GView style={styles.copyContainer}>
            <GText type="subheadline" txtC>
              {copy}
            </GText>
          </GView>
          <GView style={styles.footer}>
            <GView style={styles.left}>
              {prevButton}
            </GView>
            <GView style={styles.right}>
              {nextButton}
            </GView>
          </GView>
        </GView>
      </GView>
    );
  }
}
