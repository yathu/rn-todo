import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Portal, PortalHost } from "@gorhom/portal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, Input, Button } from "react-native-elements";

interface AddTaskProps {
  onPress?: any,
}

export const AddTask: React.FC<AddTaskProps> = (props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["0%", "65%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  };

  const BottomSheetBackground = ({ style }) => {
    return (
      <View
        style={[styles.warper, { ...style }]}
      />
    );
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onAddButtonPress}>
        <View style={styles.btnContainer}>
          <View style={styles.centerBtn}>
            <Icon name="plus" color="#fff" size={24} />
          </View>
        </View>

      </TouchableWithoutFeedback>

      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundComponent={props => <BottomSheetBackground {...props} />}
        >
          <View style={styles.contentContainer}>
            <Text h4>Create Task</Text>

            <View style={styles.formContainer}>
              <Input
                placeholder='BASIC INPUT'
              />
            </View>

            <Button
              containerStyle={styles.submitBtnContainer}
              buttonStyle={styles.submitBtn}
              title="Done"
              onPress={props.onPress}
            />
          </View>
        </BottomSheet>
        <PortalHost name="custom_host" />
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  warper: {
    backgroundColor: 'white',
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: .5,
    shadowRadius: 21.14,
    elevation: 17,
  },
  contentContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingBottom: 25,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 15,
  },
  submitBtnContainer: {
    width: '100%',
  },
  submitBtn: {
    backgroundColor: '#fe92a1',
    height: 55,
    borderRadius: 15,
  },
  centerBtn: {
    borderColor: "#fe92a1",
    backgroundColor: "#fe92a1",
    width: 40,
    height: 40,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
