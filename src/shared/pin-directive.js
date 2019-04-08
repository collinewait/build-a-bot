function applyStle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  bind: (element, binding) => {
    applyStle(element, binding);
  },
  update: (element, binding) => {
    applyStle(element, binding);
  },
};
