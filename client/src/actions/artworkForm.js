export const updateArtworkFormData = (artworkFormData) => ({
  type: "UPDATE_DATA",
  artworkFormData,
});

export const resetArtworkForm = () => {
  return {
    type: "RESET_ARTWORK_FORM",
  };
};
