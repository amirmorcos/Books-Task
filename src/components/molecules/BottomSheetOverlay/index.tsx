import React, { forwardRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import styles from "./styles";
import type { BottomSheetOverlayProps } from "./types";

const BottomSheetOverlay = forwardRef<
  BottomSheetModal,
  BottomSheetOverlayProps
>(({ children, overrideContainerStyle }, ref) => {
  return (
    <BottomSheetModal
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough
          pressBehavior="close"
        />
      )}
      ref={ref}
      index={1}
      enablePanDownToClose
      enableDynamicSizing
      snapPoints={[1]}
    >
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        enableFooterMarginAdjustment
        style={[styles.container, overrideContainerStyle]}
        contentContainerStyle={styles.content}
        // bounces={false}
      >
        {children}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default BottomSheetOverlay;
