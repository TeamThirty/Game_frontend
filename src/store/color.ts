import { create } from "zustand";

import { ColorResult } from "react-color";

interface Model {
  id: number;
  title: string;
  color: string;
  formatedColor: number;
}

interface ColorState {
  models: Model[];
  isOpen: boolean;
  activeModel: Model | null;
  hidePicker: () => void;
  changeColor: (color: ColorResult) => void;
  pickModel: (id: number) => void;
}

export const useColor = create<ColorState>((set) => ({
  models: [
    { id: 1, title: "closet", color: "", formatedColor: 0 },
    { id: 2, title: "bed", color: "", formatedColor: 0 },
  ],
  activeModel: null,
  isOpen: false,
  changeColor: (color) =>
    set((state) => {
      const numberColor = +color.hex.replace("#", "0x");
      const updatedModels = state.models.map((model) => {
        if (model.id === state.activeModel?.id) {
          return {
            ...state.activeModel,
            color: String(color.hex),
            formatedColor: numberColor,
          };
        } else {
          return model;
        }
      });

      const updatedActiveModel: Model | null = {
        ...state.activeModel,
        color: String(color.hex),
        formatedColor: numberColor,
      };

      return { models: updatedModels, activeModel: updatedActiveModel };
    }),
  hidePicker: (e) =>
    set((state) => {
      return { isOpen: false };
    }),

  pickModel: (id) =>
    set((state) => {
      const pickedModel = state.models.find((model) => model.id === id);
      return { isOpen: true, activeModel: pickedModel };
    }),
}));
