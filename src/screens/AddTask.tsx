import * as React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Portal, PortalHost } from "@gorhom/portal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const AddTask: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['0%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={onAddButtonPress}>
        <View style={styles.btnContainer}>
          <View style={styles.centerBtn}>
            <Icon name="plus" color='#fff' size={24} />
          </View>
        </View>

      </TouchableWithoutFeedback>

      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
        <PortalHost name="custom_host" />
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  centerBtn: {
    borderColor: '#fe92a1',
    backgroundColor: '#fe92a1',
    width: 40,
    height: 40,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});
