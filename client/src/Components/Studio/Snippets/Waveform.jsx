import "../../../style/main-view/waveForm.css";

const Waveform = ({ background }) => {
  return (
    <section>
      <div class={`wave0 wave-${background}`}></div>
      <div class={`wave1 wave-${background}`}></div>
      <div class={`wave2 wave-${background}`}></div>
      <div class={`wave3 wave-${background}`}></div>
      <div class={`wave4 wave-${background}`}></div>
    </section>
  );
};

export default Waveform;
