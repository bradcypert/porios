(defproject app "0.1.0"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [selmer "0.9.3"]
                 [com.taoensso/timbre "4.1.4"]
                 [com.taoensso/tower "3.0.2"]
                 [markdown-clj "0.9.77"]
                 [environ "1.0.1"]
                 [compojure "1.4.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.1.5"]
                 [ring "1.4.0"
                  :exclusions [ring/ring-jetty-adapter]]
                 [ring-cors "0.1.7"]
                 [metosin/ring-middleware-format "0.6.0"]
                 [metosin/ring-http-response "0.6.5"]
                 [bouncer "0.3.3"]
                 [prone "0.8.2"]
                 [org.clojure/tools.nrepl "0.2.11"]
                 [org.webjars/bootstrap "3.3.5"]
                 [org.webjars/jquery "2.1.4"]
                 [buddy "0.13.0"]
                 [buddy/buddy-auth "1.0.0"]
                 [buddy/buddy-sign "1.0.0"]
                 [migratus "0.8.7"]
                 [conman "0.2.7"]
                 [org.postgresql/postgresql "9.4-1203-jdbc41"]
                 [org.immutant/web "2.1.0"]
                 [test2junit "1.1.3"]]

  :min-lein-version "2.0.0"
  :uberjar-name "app.jar"
  :jvm-opts ["-server"]

  :main app.core
  :migratus {:store :database}
  :uberwar {:handler app.handler/app
            :init app.handler/init
            :destroy app.handler/destroy
            :name "ROOT.war"}

  :plugins [[lein-environ "1.0.1"]
            [migratus-lein "0.2.0"]
            [lein-uberwar "0.1.0"]
            [lein-elastic-beanstalk "0.2.8-SNAPSHOT"]
            [test2junit "1.1.3"]]
  :profiles
  {:uberjar {:omit-source true
             :env {:production true}
             :aot :all}
   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]
   :project/dev  {:dependencies [[ring/ring-mock "0.3.0"]
                                 [ring/ring-devel "1.4.0"]
                                 [pjstadig/humane-test-output "0.7.0"]
                                 [mvxcvi/puget "0.9.2"]]


                  :repl-options {:init-ns app.core}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]
                  ;;when :nrepl-port is set the application starts the nREPL server on load
                  :env {:dev        true
                        :port       9000
                        :nrepl-port 7000}}
   :project/test {:env {:test       true
                        :port       9001
                        :nrepl-port 7001}}
   :profiles/dev {}
   :profiles/test {}})
