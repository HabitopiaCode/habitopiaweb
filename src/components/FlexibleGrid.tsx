import React, { Children, isValidElement } from "react";

type Props = {
  windowWidth: number;
  gridBreakpoints: { screenSize: number; columns: number }[];
  gap: number;
  childElements: React.ReactNode[] | undefined;
  align?: string | null;
  justify?:
    | "stretch"
    | "start"
    | "center"
    | "end"
    | "around"
    | "between"
    | "evenly"
    | undefined;
};

const FlexibleGrid = (props: Props) => {
  const sortBreakpoints = (
    breakpoints: { screenSize: number; columns: number }[]
  ) => {
    breakpoints.sort((a, b) => b.screenSize - a.screenSize);
    return [
      breakpoints.map((breakpoint) => breakpoint.screenSize),
      breakpoints.map((column) => column.columns),
    ];
  };

  let gap = props.gap + "px";
  let columnWidth: string | null = null;
  let gridBreakpoints = props.gridBreakpoints;
  let [breakpoints, columns] = sortBreakpoints(gridBreakpoints);

  for (let i = 0; i < breakpoints.length; i++) {
    if (breakpoints[i] <= props.windowWidth) {
      columnWidth = ((1 / columns[i]) * 100).toFixed(2) + "%";
      break;
    }
  }

  const gridItems = Children.toArray(props.childElements);

  return (
    <div
      style={{
        display: "flex",
        gap: gap,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "stretch",
        width: "100%",
        justifyContent: props.justify ? props.justify : "around",
      }}
    >
      {Children.map(gridItems, (gridItem, index) => {
        return (
          isValidElement(gridItem) && (
            <div
              style={{
                alignItems: props.align ? props.align : "start",
                width:
                  columnWidth == null
                    ? "100%"
                    : `calc(${columnWidth} - ${gap})`,
              }}
            >
              {gridItem}
            </div>
          )
        );
      })}
    </div>
  );
};

export default FlexibleGrid;
