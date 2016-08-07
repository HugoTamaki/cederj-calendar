# encoding: utf-8

require 'csv'
require 'json'

desc "Reads csv info and shots them to data folder"
task :read_csv do

  result = {
    disciplines: []
  }

  file_contents = CSV.read('data/disciplines.csv', col_sep: ',')

  file_contents.each do |row|
    unless row[0] == 'name'
      hash_result = {}
      hash_result[:name] = row[0]
      hash_result[:local] = row[1]
      hash_result[:time] = row[2]
      hash_result[:course] = row[3]
      result[:disciplines] << hash_result
    end
  end

  File.open('data/disciplines.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end

  result = {
    courses: []
  }

  file_contents = CSV.read('data/courses.csv', col_sep: ',')

  file_contents.each do |row|
    unless row[0] == 'name'
      hash_result = {}
      hash_result[:name] = row[0]
      result[:courses] << hash_result
    end
  end

  File.open('data/courses.json', 'w:UTF-8') do |f|
    f.write(result.to_json)
  end
end