(function() {var type_impls = {
"swc_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CachingResolver%3CR%3E\" class=\"impl\"><a href=\"#impl-CachingResolver%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"struct\" href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html\" title=\"struct swc_core::ecma::loader::resolvers::lru::CachingResolver\">CachingResolver</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"swc_core/ecma/loader/resolve/trait.Resolve.html\" title=\"trait swc_core::ecma::loader::resolve::Resolve\">Resolve</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html#tymethod.new\" class=\"fn\">new</a>(cap: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, inner: R) -&gt; <a class=\"struct\" href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html\" title=\"struct swc_core::ecma::loader::resolvers::lru::CachingResolver\">CachingResolver</a>&lt;R&gt;</h4></section><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate features <code>__ecma</code> and <code>__ecma_loader</code></strong> only.</div></span></div></details>",0,"swc_core::base::resolver::NodeResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CachingResolver%3CR%3E\" class=\"impl\"><a href=\"#impl-Debug-for-CachingResolver%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html\" title=\"struct swc_core::ecma::loader::resolvers::lru::CachingResolver\">CachingResolver</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"swc_core/ecma/loader/resolve/trait.Resolve.html\" title=\"trait swc_core::ecma::loader::resolve::Resolve\">Resolve</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","swc_core::base::resolver::NodeResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CachingResolver%3CR%3E\" class=\"impl\"><a href=\"#impl-Default-for-CachingResolver%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html\" title=\"struct swc_core::ecma::loader::resolvers::lru::CachingResolver\">CachingResolver</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"swc_core/ecma/loader/resolve/trait.Resolve.html\" title=\"trait swc_core::ecma::loader::resolve::Resolve\">Resolve</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html\" title=\"struct swc_core::ecma::loader::resolvers::lru::CachingResolver\">CachingResolver</a>&lt;R&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","swc_core::base::resolver::NodeResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Resolve-for-CachingResolver%3CR%3E\" class=\"impl\"><a href=\"#impl-Resolve-for-CachingResolver%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"trait\" href=\"swc_core/ecma/loader/resolve/trait.Resolve.html\" title=\"trait swc_core::ecma::loader::resolve::Resolve\">Resolve</a> for <a class=\"struct\" href=\"swc_core/ecma/loader/resolvers/lru/struct.CachingResolver.html\" title=\"struct swc_core::ecma::loader::resolvers::lru::CachingResolver\">CachingResolver</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"swc_core/ecma/loader/resolve/trait.Resolve.html\" title=\"trait swc_core::ecma::loader::resolve::Resolve\">Resolve</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.resolve\" class=\"method trait-impl\"><a href=\"#method.resolve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_core/ecma/loader/resolve/trait.Resolve.html#tymethod.resolve\" class=\"fn\">resolve</a>(&amp;self, base: &amp;<a class=\"enum\" href=\"swc_core/common/enum.FileName.html\" title=\"enum swc_core::common::FileName\">FileName</a>, src: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"swc_core/ecma/loader/resolve/struct.Resolution.html\" title=\"struct swc_core::ecma::loader::resolve::Resolution\">Resolution</a>, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.81/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></div></details>","Resolve","swc_core::base::resolver::NodeResolver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()