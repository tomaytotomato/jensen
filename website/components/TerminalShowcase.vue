<template>
  <section id="terminal" class="py-20 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="augmented-text">TERMINAL</span> Showcase
        </h2>
        <p class="text-xl text-jensen-comment max-w-2xl mx-auto">
          ANSI colours mapped to the Jensen palette. Every shell session, augmented.
        </p>
      </div>

      <DeusExFrame variant="gold" class="max-w-5xl mx-auto p-3 md:p-5">
        <div class="terminal-pane">
          <!-- Title bar -->
          <div class="terminal-pane__title">
            <div class="terminal-pane__dots">
              <span class="terminal-pane__dot" style="background:#ED333C"></span>
              <span class="terminal-pane__dot" style="background:#EDA622"></span>
              <span class="terminal-pane__dot" style="background:#A0FF33"></span>
            </div>
            <span class="terminal-pane__label">jensen &middot; augmented-terminal</span>
            <span class="terminal-pane__spacer"></span>
          </div>

          <!-- Body -->
          <pre class="terminal-pane__body"><span class="text-jensen-green">jensen</span><span class="text-jensen-comment">@</span><span class="text-jensen-blue">augmented-terminal</span> <span class="text-jensen-gold">~/sarif-projects</span> <span class="text-jensen-fg">$</span> ls --color
<span class="text-jensen-blue">augmentations</span>/   <span class="text-jensen-blue">website</span>/         <span class="text-jensen-green">apply-theme</span>*    <span class="text-jensen-green">deploy</span>*
<span class="text-jensen-fg">apps.json</span>          <span class="text-jensen-gold">vite.config.js</span>    <span class="text-jensen-fg">README.md</span>       <span class="text-jensen-gold">.env.local</span>
<span class="text-jensen-blue">node_modules</span>/    <span class="text-jensen-blue">public</span>/          <span class="text-jensen-gold">tailwind.config.js</span>

<span class="text-jensen-green">jensen</span><span class="text-jensen-comment">@</span><span class="text-jensen-blue">augmented-terminal</span> <span class="text-jensen-gold">~/sarif-projects</span> <span class="text-jensen-fg">$</span> git status
On branch <span class="text-jensen-gold">cyber-renaissance</span>
Your branch is ahead of <span class="text-jensen-comment">'origin/main'</span> by <span class="text-jensen-dark-goldenrod">2 commits</span>.

<span class="text-jensen-fg">Changes to be committed:</span>
        <span class="text-jensen-green">new file:   website/components/TerminalShowcase.vue</span>
        <span class="text-jensen-green">modified:   website/App.vue</span>

<span class="text-jensen-fg">Changes not staged for commit:</span>
        <span class="text-jensen-copper">modified:   website/components/Header.vue</span>
        <span class="text-jensen-copper">modified:   website/components/Hero.vue</span>

<span class="text-jensen-fg">Untracked files:</span>
        <span class="text-jensen-gold">public/images/sarif-office.webp</span>
        <span class="text-jensen-gold">website/components/CodeShowcase.vue</span>

<span class="text-jensen-green">jensen</span><span class="text-jensen-comment">@</span><span class="text-jensen-blue">augmented-terminal</span> <span class="text-jensen-gold">~/sarif-projects</span> <span class="text-jensen-fg">$</span> cat package.json
{
  <span class="text-jensen-gold">"name"</span>: <span class="text-jensen-copper">"jensen-theme"</span>,
  <span class="text-jensen-gold">"version"</span>: <span class="text-jensen-copper">"1.4.0"</span>,
  <span class="text-jensen-gold">"description"</span>: <span class="text-jensen-copper">"Cyber Renaissance theme collection"</span>,
  <span class="text-jensen-gold">"scripts"</span>: {
    <span class="text-jensen-gold">"dev"</span>: <span class="text-jensen-copper">"vite"</span>,
    <span class="text-jensen-gold">"build"</span>: <span class="text-jensen-copper">"vite build"</span>
  }
}

<span class="text-jensen-green">jensen</span><span class="text-jensen-comment">@</span><span class="text-jensen-blue">augmented-terminal</span> <span class="text-jensen-gold">~/sarif-projects</span> <span class="text-jensen-fg">$</span> cargo build --release --target=neural-link
   <span class="text-jensen-dark-goldenrod">Compiling</span> sarif-core v1.0.4
   <span class="text-jensen-dark-goldenrod">Compiling</span> augment-driver v0.27.0
<span class="text-jensen-red">error[E0382]</span>: borrow of moved value: `implant`
  <span class="text-jensen-blue">--&gt;</span> src/neural_link.rs:42:18
   <span class="text-jensen-blue">|</span>
<span class="text-jensen-blue">38</span> <span class="text-jensen-blue">|</span>     let implant = <span class="text-jensen-dutch-white">Augmentation</span>::new();
   <span class="text-jensen-blue">|</span>         <span class="text-jensen-comment">------- move occurs because `implant` has type `Augmentation`</span>
<span class="text-jensen-blue">40</span> <span class="text-jensen-blue">|</span>     activate(implant);
   <span class="text-jensen-blue">|</span>              <span class="text-jensen-red">------- value moved here</span>
<span class="text-jensen-blue">42</span> <span class="text-jensen-blue">|</span>     calibrate(implant);
   <span class="text-jensen-blue">|</span>               <span class="text-jensen-red">^^^^^^^ value borrowed here after move</span>

<span class="text-jensen-red">error</span>: could not compile `sarif-core` due to previous error

<span class="text-jensen-green">jensen</span><span class="text-jensen-comment">@</span><span class="text-jensen-blue">augmented-terminal</span> <span class="text-jensen-gold">~/sarif-projects</span> <span class="text-jensen-fg">$</span> <span class="terminal-caret" aria-hidden="true"></span></pre>
        </div>
      </DeusExFrame>

      <p class="text-center text-xs text-jensen-comment mt-4 italic">
        Static mockup. ANSI palette mapped from the canonical Jensen colours.
      </p>
    </div>
  </section>
</template>

<script>
import DeusExFrame from './DeusExFrame.vue'

export default {
  name: 'TerminalShowcase',
  components: {
    DeusExFrame
  }
}
</script>

<style scoped>
.terminal-pane {
  background: #141514;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.55;
  overflow: hidden;
}

/* Title bar */
.terminal-pane__title {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0.55rem 1rem;
  background: #0A0B0A;
  border-bottom: 1px solid #503A1D;
  font-size: 0.72rem;
}

.terminal-pane__dots {
  display: flex;
  gap: 0.5rem;
}

.terminal-pane__dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
}

.terminal-pane__label {
  color: #C4C7C4;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: 'Eurostile', 'EuroStyle', 'Arial Narrow', sans-serif;
}

.terminal-pane__spacer {
  /* Balances the grid so the label stays centred. */
}

/* Body */
.terminal-pane__body {
  margin: 0;
  padding: 1.5rem 1.25rem 1.75rem;
  color: #FBFBFB;
  background: #141514;
  overflow-x: auto;
  white-space: pre;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  tab-size: 4;
}

/* Blinking caret */
.terminal-caret {
  display: inline-block;
  width: 0.55em;
  height: 1.05em;
  background: #FBFBFB;
  margin-left: 0.15em;
  vertical-align: text-bottom;
  animation: terminal-caret-blink 1.05s steps(1) infinite;
}

@keyframes terminal-caret-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Subtle scrollbar inside the terminal so long lines feel native. */
.terminal-pane__body::-webkit-scrollbar { height: 6px; }
.terminal-pane__body::-webkit-scrollbar-track { background: transparent; }
.terminal-pane__body::-webkit-scrollbar-thumb {
  background: rgba(237, 166, 34, 0.25);
  border-radius: 3px;
}
.terminal-pane__body::-webkit-scrollbar-thumb:hover {
  background: rgba(237, 166, 34, 0.45);
}
</style>
