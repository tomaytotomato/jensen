<template>
  <section id="code" class="py-20 px-6">
    <div class="container mx-auto max-w-5xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="augmented-text">CODE</span> Editor
        </h2>
        <p class="text-xl text-jensen-comment max-w-2xl mx-auto">
          Source files rendered with the Jensen Prism theme. Pick a language to see the palette at work.
        </p>
      </div>

      <DeusExFrame variant="gold">
        <!-- Tab strip -->
        <div role="tablist" class="flex items-stretch flex-wrap border-b border-jensen-gold/30 px-4 pt-3">
          <button
            v-for="lang in languages"
            :key="lang.id"
            type="button"
            role="tab"
            :aria-selected="activeTab === lang.id"
            @click="activeTab = lang.id"
            :class="[
              'px-4 pb-2 text-xs uppercase tracking-widest border-b-2 transition-colors -mb-px',
              activeTab === lang.id
                ? 'text-jensen-gold border-jensen-gold'
                : 'text-jensen-comment border-transparent hover:text-jensen-fg'
            ]"
          >
            {{ lang.label }}
          </button>
        </div>

        <!-- Code block. The <pre><code> styling is driven by prism/jensen-prism.css. -->
        <pre class="!m-0 !rounded-none"><code
          :class="`language-${activeTab}`"
          v-html="currentSample"
        ></code></pre>
      </DeusExFrame>

      <p class="text-center text-xs text-jensen-comment mt-4 italic">
        Syntax highlighting by the Jensen Prism theme.
      </p>
    </div>
  </section>
</template>

<script>
import DeusExFrame from './DeusExFrame.vue'
// Prism stylesheet lives at the repo root under prism/ as a shippable theme
// asset. Vite resolves cross-directory imports without ceremony.
import '../../prism/jensen-prism.css'

export default {
  name: 'CodeShowcase',
  components: { DeusExFrame },
  data() {
    return {
      activeTab: 'javascript',
      languages: [
        { id: 'javascript', label: 'JavaScript' },
        { id: 'python',     label: 'Python' },
        { id: 'rust',       label: 'Rust' },
        { id: 'markup',     label: 'HTML + CSS' }
      ],
      // Pre-rendered Prism token markup. Tokens follow the standard Prism
      // class system; see prism/jensen-prism.css for the colour mapping.
      samples: {
        javascript: [
          '<span class="token comment">// Apply the Jensen palette to a target DOM element.</span>',
          '<span class="token keyword">const</span> <span class="token constant">PALETTE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>',
          '  background<span class="token operator">:</span> <span class="token string">\'#141514\'</span><span class="token punctuation">,</span>',
          '  foreground<span class="token operator">:</span> <span class="token string">\'#FBFBFB\'</span><span class="token punctuation">,</span>',
          '  primary<span class="token operator">:</span>    <span class="token string">\'#EDA622\'</span><span class="token punctuation">,</span>',
          '  secondary<span class="token operator">:</span>  <span class="token string">\'#E55D02\'</span><span class="token punctuation">,</span>',
          '  alert<span class="token operator">:</span>      <span class="token string">\'#ED333C\'</span><span class="token punctuation">,</span>',
          '<span class="token punctuation">}</span><span class="token punctuation">;</span>',
          '',
          '<span class="token keyword">function</span> <span class="token function">applyTheme</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> palette <span class="token operator">=</span> <span class="token constant">PALETTE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>',
          '  <span class="token keyword">const</span> root <span class="token operator">=</span> target <span class="token operator">??</span> <span class="token class-name">document</span><span class="token punctuation">.</span><span class="token property">documentElement</span><span class="token punctuation">;</span>',
          '  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> hex<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>palette<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>',
          '    root<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">\'--jensen-\'</span> <span class="token operator">+</span> name<span class="token punctuation">,</span> hex<span class="token punctuation">)</span><span class="token punctuation">;</span>',
          '  <span class="token punctuation">}</span>',
          '  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>',
          '<span class="token punctuation">}</span>',
          '',
          '<span class="token keyword">export</span> <span class="token punctuation">{</span> applyTheme<span class="token punctuation">,</span> <span class="token constant">PALETTE</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>'
        ].join('\n'),

        python: [
          '<span class="token triple-quoted-string string">"""Render the Jensen palette as ANSI escape codes."""</span>',
          '<span class="token keyword">from</span> dataclasses <span class="token keyword">import</span> dataclass',
          '',
          '<span class="token decorator"><span class="token punctuation">@</span><span class="token function">dataclass</span></span><span class="token punctuation">(</span>frozen<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>',
          '<span class="token keyword">class</span> <span class="token class-name">CyberRenaissance</span><span class="token punctuation">:</span>',
          '    background<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">\'#141514\'</span>',
          '    primary<span class="token punctuation">:</span>    <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">\'#EDA622\'</span>',
          '    secondary<span class="token punctuation">:</span>  <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">\'#E55D02\'</span>',
          '    alert<span class="token punctuation">:</span>      <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">\'#ED333C\'</span>',
          '',
          '    <span class="token keyword">def</span> <span class="token function">ansi</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> hex_value<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token builtin">str</span><span class="token punctuation">:</span>',
          '        hex_value <span class="token operator">=</span> hex_value<span class="token punctuation">.</span><span class="token function">lstrip</span><span class="token punctuation">(</span><span class="token string">\'#\'</span><span class="token punctuation">)</span>',
          '        r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>hex_value<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>',
          '        <span class="token keyword">return</span> <span class="token string">f\'\\x1b[38;2;{r};{g};{b}m\'</span>',
          '',
          '',
          'theme <span class="token operator">=</span> <span class="token class-name">CyberRenaissance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>',
          '<span class="token builtin">print</span><span class="token punctuation">(</span>theme<span class="token punctuation">.</span><span class="token function">ansi</span><span class="token punctuation">(</span>theme<span class="token punctuation">.</span>primary<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'Augmentation online.\'</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">)</span>'
        ].join('\n'),

        rust: [
          '<span class="token comment">//! Cyber Renaissance palette for the Jensen theme.</span>',
          '<span class="token keyword">use</span> std<span class="token punctuation">::</span>fmt<span class="token punctuation">;</span>',
          '',
          '<span class="token attribute"><span class="token punctuation">#[</span>derive<span class="token punctuation">(</span><span class="token class-name">Debug</span><span class="token punctuation">,</span> <span class="token class-name">Clone</span><span class="token punctuation">,</span> <span class="token class-name">Copy</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>',
          '<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token class-name">Palette</span> <span class="token punctuation">{</span>',
          '    <span class="token keyword">pub</span> primary<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>',
          '    <span class="token keyword">pub</span> secondary<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>',
          '    <span class="token keyword">pub</span> alert<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>',
          '<span class="token punctuation">}</span>',
          '',
          '<span class="token keyword">impl</span> fmt<span class="token punctuation">::</span><span class="token class-name">Display</span> <span class="token keyword">for</span> <span class="token class-name">Palette</span> <span class="token punctuation">{</span>',
          '    <span class="token keyword">fn</span> <span class="token function-definition function">fmt</span><span class="token punctuation">(</span><span class="token operator">&</span><span class="token keyword">self</span><span class="token punctuation">,</span> f<span class="token punctuation">:</span> <span class="token operator">&</span><span class="token keyword">mut</span> fmt<span class="token punctuation">::</span><span class="token class-name">Formatter</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> fmt<span class="token punctuation">::</span><span class="token class-name">Result</span> <span class="token punctuation">{</span>',
          '        <span class="token macro property">write!</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token string">"primary = {:#08X}, alert = {:#08X}"</span><span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">.</span>primary<span class="token punctuation">,</span> <span class="token keyword">self</span><span class="token punctuation">.</span>alert<span class="token punctuation">)</span>',
          '    <span class="token punctuation">}</span>',
          '<span class="token punctuation">}</span>',
          '',
          '<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>',
          '    <span class="token keyword">let</span> theme <span class="token operator">=</span> <span class="token class-name">Palette</span> <span class="token punctuation">{</span> primary<span class="token punctuation">:</span> <span class="token number">0xEDA622</span><span class="token punctuation">,</span> secondary<span class="token punctuation">:</span> <span class="token number">0xE55D02</span><span class="token punctuation">,</span> alert<span class="token punctuation">:</span> <span class="token number">0xED333C</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>',
          '    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> theme<span class="token punctuation">)</span><span class="token punctuation">;</span>',
          '<span class="token punctuation">}</span>'
        ].join('\n'),

        markup: [
          '<span class="token comment">&lt;!-- Sarif Industries operative login --&gt;</span>',
          '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cyber-panel<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/auth<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>',
          '  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>operative-id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Operative ID<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>',
          '  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>operative-id<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>operative<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/&gt;</span></span>',
          '  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-augmented<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Authenticate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>',
          '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>',
          '',
          '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>',
          '<span class="language-css"><span class="token selector">.cyber-panel</span> <span class="token punctuation">{</span>',
          '  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode color">#141514</span><span class="token punctuation">;</span>',
          '  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">px</span> <span class="token string">solid</span> <span class="token hexcode color">#EDA622</span><span class="token punctuation">;</span>',
          '  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token unit">rem</span><span class="token punctuation">;</span>',
          '<span class="token punctuation">}</span>',
          '',
          '<span class="token selector">.btn-augmented</span> <span class="token punctuation">{</span>',
          '  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode color">#EDA622</span><span class="token punctuation">;</span>',
          '  <span class="token property">text-transform</span><span class="token punctuation">:</span> <span class="token string">uppercase</span><span class="token punctuation">;</span>',
          '  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token unit">em</span><span class="token punctuation">;</span>',
          '<span class="token punctuation">}</span></span>',
          '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>'
        ].join('\n')
      }
    }
  },
  computed: {
    currentSample() {
      return this.samples[this.activeTab]
    }
  }
}
</script>

<style scoped>
/* The DeusExFrame fills its container; pre inside should not have its own
   rounded background or margin fighting the frame chrome. */
.deus-ex-frame :deep(pre[class*="language-"]) {
  margin: 0;
  border-radius: 0;
  background: transparent;
  padding: 1.25rem 1.5rem 1.5rem;
}

/* Slightly tighter font on small screens so 100-char lines don't overflow. */
@media (max-width: 768px) {
  .deus-ex-frame :deep(pre[class*="language-"]) {
    font-size: 0.8rem;
    padding: 1rem;
  }
}
</style>
