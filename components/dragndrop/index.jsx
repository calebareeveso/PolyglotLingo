"use client";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./strictmodedroppable";

const DragnDrop = () => {
  const data = [
    {
      id: "1",
      content: "image1",
    },
    {
      id: "2",
      content: "image2",
    },
    {
      id: "3",
      content: "image3",
    },
  ];

  const columnsFromBackend = {
    ["65432"]: {
      title: "to-do",
      items: data,
      order: 1,
      color: { bg: "#FDDBDB", text: "#CC1111" },
    },
    ["123456"]: {
      title: "doing",
      items: [
        {
          id: "4",
          content: "image4",
        },
        {
          id: "5",
          content: "image5",
        },
        {
          id: "6",
          content: "image6",
        },
      ],
      order: 2,
      color: { bg: "#FFD580", text: "#A36D00" },
    },
  };

  // data ends
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  useEffect(() => {
    // Get the entries of the columns before the update
    const updatedColumns = Object.entries(columns);
    console.log(updatedColumns[0][0]);
    console.log("UPDATED COLUMNS", updatedColumns);
  }, [columns]);

  return (
    <section className="row-span-4 bg-primary py-4 sm:py-10 px-4 border-t border-b border-black text-center">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 my-2 ">
          {/* each card section is horizontal */}
          <div className="">
            <StrictModeDroppable
              key={Object.entries(columns)[0][0]}
              droppableId={Object.entries(columns)[0][0]}
            >
              {(provided, snapshot) => (
                <div
                  // card container / each section style
                  className={`min-h-2 flex flex-col  min-w-72 rounded-[5px] p-1 `}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {Object.entries(columns)[0][1].items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <span
                          className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </span>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </StrictModeDroppable>
          </div>
          {/* ////////////// */}
          <div>
            <div className="-translate-y-3 mx-auto text-white w-fit bg-gradient-to-t from-gray-500 to-gray-400 text-xl sm:text-2xl px-8 sm:px-16 py-3 border border-black">
              Speed and Accuracy <br />
              (Drag and Drop)
            </div>
            <div className="text-center flex justify-around mt-3">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
            <div className="text-center flex justify-around">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
            <div className="text-center flex justify-around">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
            <div className="text-center flex justify-around">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
            <div className="text-center flex justify-around">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
            <div className="text-center flex justify-around">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
            <div className="text-center flex justify-around">
              <p className="mb-2 w-full bg-white border border-black text-center p-2">
                <span className=" text-2xl sm:text-2xl py-3 ">TEXT</span>
              </p>
            </div>
          </div>
          {/* ///////////////// */}
          <div className="">
            <StrictModeDroppable
              key={Object.entries(columns)[1][0]}
              droppableId={Object.entries(columns)[1][0]}
            >
              {(provided, snapshot) => (
                <div
                  // card container / each section style
                  className={`min-h-2 flex flex-col  min-w-72 rounded-[5px] p-1 `}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {Object.entries(columns)[1][1].items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <span
                          className="mb-2 w-full bg-white border border-black text-center p-2 text-2xl sm:text-2xl py-16"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </span>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </StrictModeDroppable>
          </div>
        </div>
      </DragDropContext>
    </section>
  );
};

export default DragnDrop;
